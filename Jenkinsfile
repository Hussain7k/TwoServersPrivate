pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo -S npm run"
            }
        }
       
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-server"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-server/"
                sh "node app.Js"
            }
        }
    }
}
