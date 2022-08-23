docker build -t further-edu-website-image -f Dockerfile .

docker run -p 3000:3000 --name further-edu-website further-edu-website-image
