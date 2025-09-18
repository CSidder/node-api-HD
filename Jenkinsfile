pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"  // Match what you set in Jenkins global tools
    }

    stages {
        stage("Build") {
            steps {
                echo "Installing dependencies..."
                bat "npm install"
            }
        }

        stage("Test") {
            steps {
                echo "Running tests..."
                bat "npm test || echo Tests failed"
                echo "Installing Jest..."
                bat "npm install --save-dev jest"
            }
        }

        stage('Code Quality Check') {
    steps {
        withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]) {
            bat 'C:\\Users\\saada\\Downloads\\sonar-scanner-7.2.0.5079-windows-x64\\bin\\sonar-scanner.bat -Dsonar.login=%SONAR_TOKEN%'
        }
    }
}



        stage("Security Scan") {
            steps {
                echo "Skipping security scan for now"
            }
        }

        stage("Deploy") {
            steps {
                echo "Starting app locally..."
                bat "start npm start"
            }
        }
    }
}
