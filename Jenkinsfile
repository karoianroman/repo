pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t app .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Running tests'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f app || true'
                sh 'docker run -d -p 3000:3000 --name myapp app'
            }
        }
    }
}
