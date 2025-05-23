pipeline {
  agent any

  tools {
    nodejs 'nodeHome'
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/gauravbhuravane/online-course-platform.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        bat 'docker build -t online-course-platform .'
      }
    }

    stage('Run Docker Container') {
      steps {
        bat 'docker rm -f online-course-platform || exit 0'
        bat 'docker run -d -p 3000:80 --name online-course-platform online-course-platform'
      }
    }
  }

  triggers {
    pollSCM('H/5 * * * *')
  }
}
