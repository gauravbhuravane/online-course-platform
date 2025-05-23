pipeline {
  agent any

  tools {
    nodejs 'nodeHome'
  }

  environment {
    PORT = '3000'
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/gauravbhuravane/online-course-platform.git', branch: 'main'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t online-course-platform .'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker rm -f online-course-platform || true'
        sh 'docker run -d --name online-course-platform -p 3000:80 online-course-platform'
        echo '✅ React App running in Docker at: http://localhost:3000'
      }
    }

    stage('Run Ansible') {
      steps {
        sh 'ansible-playbook deploy.yml'
      }
    }
  }

  triggers {
    pollSCM('* * * * *')
  }
}
