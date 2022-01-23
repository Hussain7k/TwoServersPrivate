pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo -S npm run"
                sh 'hugo -D -F -b "http://ec2-157-175-250-103.me-south-1.compute.amazonaws.com" -d public'
            }
        }
       
        stage("Deploy") {
            steps {
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-server/"
                rsync -r "$WORKSPACE/build/" Hussain7k@http://ec2-157-175-250-103.me-south-1.compute.amazonaws.com:/usr/share/nginx/html/
            }
        }
    }
}
