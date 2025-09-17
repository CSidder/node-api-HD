pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"  // Must match what you typed exactly in Global Tool Config
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

        stage("Code Quality") {
            steps {
                echo "Skipping SonarQube for now"
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
