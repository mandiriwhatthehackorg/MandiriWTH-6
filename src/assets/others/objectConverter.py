import json
arr = []
with open('absenceTypeMapping.json') as json_file:
    arr = json.load(json_file)
o = {}
for item in arr:
    print(item)
    o[item['ABSENCE_TYPE_ID']] = item

with open('output.json', 'w') as f:
    json.dump(o, f)
