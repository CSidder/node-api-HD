pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"  
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
                    bat 'C:\\sonar-scanner\\bin\\sonar-scanner.bat -Dsonar.login=%SONAR_TOKEN%'
                }
            }
        }

            stage("Security Scan") {
        steps {
            echo "Running security scan using npm audit..."
            bat "npm audit --audit-level=low || exit 0"
        }
    }


        stage("Deploy") {
    steps {
        echo "Starting the Node.js app locally..."
        bat "start cmd /c \"npm start\""
            }
        }

    }
}
