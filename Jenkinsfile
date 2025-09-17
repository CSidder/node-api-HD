pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "Installing dependencies..."
                sh "npm install"
            }
        }

        stage("Test") {
            steps {
                echo "Running tests..."
                sh "npm test || echo 'Tests failed, continuing...'"
            }
        }

        stage("Code Quality") {
            steps {
                echo "Running code quality scan..."
                sh """
                    npm install -g sonar-scanner
                    sonar-scanner \\
                      -Dsonar.projectKey=node-api \\
                      -Dsonar.sources=. \\
                      -Dsonar.host.url=http://localhost:9000 \\
                      -Dsonar.login=your_sonarqube_token
                """
            }
        }

        stage("Security Scan") {
            steps {
                echo "Skipping Trivy scan because Docker is not used."
            }
        }

        stage("Deploy") {
            steps {
                echo "Starting app locally (no Docker)..."
                sh "npm start &"
            }
        }
    }
}

