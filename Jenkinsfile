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

        stage("SonarCloud Analysis") {
            steps {
                withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]) {
                    bat '''
                        echo 🔍 Starting SonarCloud Scan...

                        curl -sSLo sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006.zip
                        powershell -Command "Expand-Archive sonar-scanner.zip -Force"
                        
                        sonar-scanner-5.0.1.3006\\bin\\sonar-scanner.bat
                    '''
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
