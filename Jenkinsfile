pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo -S npm run"
                hugo baseUrl: 'http://157.175.147.242:8080/job/TwoServersPipeline/', destination: 'http://ec2-157-175-250-103.me-south-1.compute.amazonaws.com/', hugoHome: '/usr/local/bin/'
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
