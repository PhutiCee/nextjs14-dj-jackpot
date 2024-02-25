from flask import Flask, request, jsonify, Response
import boto3
import pymysql

app = Flask(__name__)

# AWS S3 configuration
s3 = boto3.client('s3', region_name=, aws_access_key_id=, aws_secret_access_key=)
bucket_name = 'jack-pot'

db_config = {
    'host': ,
    'user': ,
    'password': ,
    'database': ,
    'port': 3306,
}
# MySQL database configuration
db = pymysql.connect(**db_config)
cursor = db.cursor()

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     file = request.files['file']
#     if file:
#         filename = file.filename
#         s3_key = 'uploads/' + filename
#         s3.upload_fileobj(file, bucket_name, s3_key)
#         # Save metadata to MySQL database
#         cursor.execute("INSERT INTO music_files (filename, s3_key) VALUES (%s, %s)", (filename, s3_key))
#         db.commit()
#         return jsonify({'message': 'File uploaded successfully'}), 200
#     else:
#         return jsonify({'error': 'No file provided'}), 400

@app.route('/metadata', methods=['GET'])
def get_metadata():
    cursor.execute("SELECT * FROM music")
    files = cursor.fetchall()
    # file_url =files[0][2]
    print(files)
    return "hello world"
    # try:
    #     response = s3.get_object(Bucket=bucket_name, Key="s3://jack-pot/Music/sample-3s.mp3")
    #     audio_data = response['Body']
        
    #     print("hello", audio_data)
    #     headers = {'Content-Type': 'audio/mpeg'}
    #     return Response(audio_data, headers=headers, status=200)
    # except s3.exceptions.NoSuchKey as e:
    #     return jsonify({'error': 'File not found'}), 404
    # except Exception as e:
    #     return jsonify({'error': str(e)}), 500

    # metadata = [{'filename': file[1], 's3_key': file[2]} for file in files]
    # return jsonify(metadata), 200

if __name__ == '__main__':
    app.run(debug=True)