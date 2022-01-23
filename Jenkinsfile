pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo -S npm run"
                hugo baseUrl: 'https://github.com/Hussain7k/TwoServersPrivate.git', destination: 'http://ec2-157-175-250-103.me-south-1.compute.amazonaws.com/', hugoHome: '/usr/local/bin/'
            }
        }
       
        stage("Deploy") {
            steps {
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-server/"
            }
        }
    }
}
