@Library('appswmjenkins@master')_

pipeline {
    agent {
        node { label 'docker' }
    }
    environment {
        gitCheckoutParams = checkout scm
        SLACK_CHANNEL = "apps-builds"
        SLACK_ICON = ":backend:"
        SERVICE_NAME = "typs"
        DEPARTMENT = 'applications'
        CURR_COMMIT = "${gitCheckoutParams.GIT_COMMIT}"
        PREVIOUS_COMMIT ="${env.GIT_PREVIOUS_COMMIT}"
        REPO = getRepoName("${gitCheckoutParams.GIT_URL}")
        BRANCH = "${gitCheckoutParams.GIT_BRANCH}"
        COMMITER = sh (
            script: "git show -s --pretty=%an || true",
            returnStdout: true
            ).trim()
    }
    triggers {
        pollSCM '* * * * *'
    }
    options {
      timeout(time: 30, unit: 'MINUTES')
      disableConcurrentBuilds()
      ansiColor('xterm')
    }

    stages {
        stage('Initialize'){
            steps{
                script{
                    packageJSON = readJSON file: "./package.json"
                    packageVersion = packageJSON.version
                }
            }
        }
        stage('Build') {
            steps {
                buildStep{
                    sh "npm i"
                    sh "npm run build"
                    }
            }
        }

        stage('Publish') {
            when { 
                branch 'master'
                expression { return applicationsUtils.shouldPublishNpm(packageJSON.name, packageJSON.version) }
            } 
            steps {
                publishStep{ sh 'npm publish ./dist --access public'}
            }
        }
    }

    post{
        always {
        sendNotifications(currentBuild.currentResult)
        cleanWs()
        }

    }
}

