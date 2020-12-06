import fs from 'fs';

/*
    In your batch file, how many passports are valid?

    byr (Birth Year) - four digits; at least 1920 and at most 2002.
    iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    hgt (Height) - a number followed by either cm or in:
        If cm, the number must be at least 150 and at most 193.
        If in, the number must be at least 59 and at most 76.
    hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    pid (Passport ID) - a nine-digit number, including leading zeroes.
    cid (Country ID) - ignored, missing or not.
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstPassports = data.split(/\r?\n\n/);
    lstPassports = lstPassports.map(x => {
        let reBirth = /byr\:(?<birthYear>\d{4})([\s\n]|$)/.exec(x);
        let reIsssue = /iyr\:(?<issueYear>\d{4})([\s\n]|$)/.exec(x);
        let reExpire = /eyr\:(?<expireYear>\d{4})([\s\n]|$)/.exec(x);
        let reHeight = /hgt\:(?<height>\d+(cm|in))([\s\n]|$)/.exec(x);
        let reHair = /hcl\:(?<hairColor>#[0-9a-f]{6})([\s\n]|$)/.exec(x);
        let reEye = /ecl\:(?<eyeColor>amb|blu|brn|gry|grn|hzl|oth)([\s\n]|$)/.exec(x);
        let rePassport = /pid\:(?<passportID>\d{9})([\s\n]|$)/.exec(x);
        let reCountry = /cid\:(?<countryID>[^\s\n]+)([\s\n]|$)/.exec(x);

        let birthYear = reBirth ? reBirth.groups.birthYear : null;
        if (birthYear && (birthYear < 1920 || birthYear > 2002)) {
            birthYear = null;
        }

        let issueYear = reIsssue ? reIsssue.groups.issueYear : null;
        if (issueYear && (issueYear < 2010 || issueYear > 2020)) {
            issueYear = null;
        }

        let expireYear = reExpire ? reExpire.groups.expireYear : null;
        if (expireYear && (expireYear < 2020 || expireYear > 2030)) {
            expireYear = null;
        }

        let height = reHeight ? reHeight.groups.height : null
        if (height) {
            if (height.includes('cm') && (parseInt(height) < 150 || parseInt(height) > 193)) {
                height = null;
            } else if (height.includes('in') && (parseInt(height) < 59 || parseInt(height) > 76)) {
                height = null;
            }
        }

        return {
            birthYear: birthYear,
            issueYear: issueYear,
            expireYear: expireYear,
            height: height,
            hairColor: reHair ? reHair.groups.hairColor : null,
            eyeColor: reEye ? reEye.groups.eyeColor : null,
            passportID: rePassport ? rePassport.groups.passportID : null,
            countryID: reCountry ? reCountry.groups.countryID : null,
            original: x
        }
    });

    let validPassports = 0;
    lstPassports.forEach(p => {
        if (p.birthYear !== null &&
            p.issueYear !== null &&
            p.expireYear !== null &&
            p.height !== null &&
            p.hairColor !== null &&
            p.eyeColor !== null &&
            p.passportID !== null) {
            validPassports += 1;
        } else {
            console.log(p);
        }
    });
    console.log({ validPassports, count: lstPassports.length });
});