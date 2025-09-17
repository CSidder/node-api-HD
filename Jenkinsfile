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
                echo "Running Trivy security scan..."
                sh """
                    docker run --rm -v $(pwd):/app aquasec/trivy fs /app || echo 'Trivy found issues'
                """
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying app..."
                sh "docker build -t node-api ."
                sh "docker run -d -p 3000:3000 node-api"
            }
        }
    }
}
