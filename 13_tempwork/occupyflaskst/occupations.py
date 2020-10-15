# Team Hairy Owls(Ethan Shenker, Arib Chowdhury, Jon Lee)
# SoftDev
# K13 - - Template for Success
# 2020-10-15

from csv import DictReader
from random import choices as c


def select(file: str) -> str:
    with open(file) as file:  # open the file
        reader = DictReader(file)

        jobs = []
        weights = []

        for row in reader:
            jobs.append(row["Job Class"])
            # casts each str into a float
            weights.append(float(row['Percentage']))

    file.close()

    return c(jobs[:-1], weights=weights[:-1])[0]


def get_occs_list(file: str) -> list:
    with open(file) as file:
        reader = DictReader(file)

        jobs = []

        for row in reader:
            jobs.append(row["Job Class"])
    file.close()

    return jobs[:-1]


if __name__ == "__main__":
    print(select("occupations.csv"))
    print(get_occs_list('occupations.csv'))
