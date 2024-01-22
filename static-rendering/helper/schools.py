
SCHOOLS = [
 {"name": "Albert-Schweitzer-Schule"},
 {"name": "Anne-Frank-Schule"},
 {"name": "Astrid-Lindgren-Schule"},
 {"name": "Christian-Morgenstern-Schule"},
 {"name": "Eduard-Dietrich-Schule"},
 {"name": "Erich Kästner-Schule"},
 {"name": "Gebrüder-Grimm-Schule"},
 {"name": "Heinrich-Schmitz-Schule"},
 {"name": "Johann-Peter-Melchior-Schule"},
 {"name": "Karl-Arnold-Schule"},
 {"name": "Matthias-Claudius-Schule"},
 {"name": "Minoritenschule"},
 {"name": "Paul-Maar-Schule"},
 {"name": "Suitbertusschule"},
 {"name": "Wilhelm-Busch-Schule"},
 {"name": "Carl-Friedrich-von-Weizsäcker-Gymnasium"},
 {"name": "Dietrich-Bonhoeffer-Gymnasium"},
 {"name": "Friedrich-Ebert-Realschule"},
 {"name": "Käthe-Kollwitz-Schule"},
 {"name": "Kopernikus-Gymnasium"},
 {"name": "Martin-Luther-King-Gesamtschule"},
]
JAVASCRIPT = []
for school in SCHOOLS:
    name = school["name"]
    print(name)

    href = input("href: ")
    street = input("street: ")
    plz = input("plz: ")
    type = input("type: ")
    tel = input("tel: ")
    email = input("email: ")
    district = input("district: ")

    data = f'~name: "{name}",href: "{href}", street: "{street}", plz: "{plz}", type: "{type}", tel:"{tel}", email: "{email}", district: "{district}"^,'
    data = data.replace("~","{")
    data = data.replace("^","}")
    print("________________")
    print(data)
    print("######################################")

    
    JAVASCRIPT.append(data)
    printobj = str(JAVASCRIPT).replace("'","")

with open("./obj.txt", "w") as f:
    f.write(printobj)
