pipeline {
    agent {
        docker {
            image 'node:14-slim'
        }
    }
    stages {


        stage('Build') {
         steps {
            sh 'docker build -t calender-date-front . '
         }
      }

      stage('Push') {
         steps {
            dir("$WORKSPACE") {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                      def image = docker.build('seifeleslam/calender-date-front:latest')
                      image.push()
                  }
                }
            }
         }
      }


    }
}