import fs from 'fs';

/*
    In your batch file, how many passports are valid?

        byr (Birth Year)
        iyr (Issue Year)
        eyr (Expiration Year)
        hgt (Height)
        hcl (Hair Color)
        ecl (Eye Color)
        pid (Passport ID)
        cid (Country ID) [Optional]
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstPassports = data.split(/\r?\n\n/);
    lstPassports = lstPassports.map(x => {
        /*

        */
        let reBirth = /byr\:(?<birthYear>[^\s\n]+)/.exec(x);
        let reIsssue = /iyr\:(?<issueYear>[^\s\n]+)/.exec(x);
        let reExpire = /eyr\:(?<expireYear>[^\s\n]+)/.exec(x);
        let reHeight = /hgt\:(?<height>[^\s\n]+)/.exec(x);
        let reHair = /hcl\:(?<hairColor>[^\s\n]+)/.exec(x);
        let reEye = /ecl\:(?<eyeColor>[^\s\n]+)/.exec(x);
        let rePassport = /pid\:(?<passportID>[^\s\n]+)/.exec(x);
        let reCountry = /cid\:(?<countryID>[^\s\n]+)/.exec(x);

        return {
            birthYear: reBirth ? reBirth.groups.birthYear : null,
            issueYear: reIsssue ? reIsssue.groups.issueYear : null,
            expireYear: reExpire ? reExpire.groups.expireYear : null,
            height: reHeight ? reHeight.groups.height : null,
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
        }
    });
    console.log({ validPassports, count: lstPassports.length });
});