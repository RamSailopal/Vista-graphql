import json
import pymongo
import requests
api_url = "http://nodevista:9000/fmqlEP?fmql=DESCRIBE%202%20LIMIT%201000"
response = requests.get(api_url)
data = response.json()
client = pymongo.MongoClient("mongodb://root:mongo@mongo:27017/")
mydb = client.patients
mycol = mydb.patient_info  


x = mycol.insert_many(data["results"]).inserted_ids

print("data inserted")

for y in mycol.find():
  print(y) 

client.patients.command('createUser', 'newUser', pwd='Test123', roles=[{'role':'readWrite','db':'patients'}])
