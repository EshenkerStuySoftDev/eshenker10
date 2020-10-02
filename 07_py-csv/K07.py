# Team "Ethan and Dean"
# Ethan Shenker, Ethan Machleder, Dean Carey
# K06 -- Random(-ish) Team Occupation Selector
# 2020-09-30
# requires python3.8

from csv import DictReader
from random import choices as c

with open("occupations.csv") as file:  # open the file
    reader = DictReader(file)

    jobs = []
    weights = []

    # create each list

    for row in reader:
        jobs.append(row["Job Class"])
        weights.append(row['Percentage'])

file.close()

jobs = jobs[:-1]  # takes out last "total" value

# converts all string values into floats, removes last
weights = [float(val) for val in weights[:-1]]

print(c(jobs, weights=weights))
