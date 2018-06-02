var badAss = {
    name: 'Nicole',
    numberOfHorses: 4,
    allBreedsOfHorses: function(){
        for (i = 0; i < this.aboutHorses.length; i++){
            console.log(this.aboutHorses[i].breedOfHorse)
            }
        },
    aboutHorses: [
        {
            nameOfHorse:'Shaman',
            breedOfHorse:'Paso Fino',
            ageOfHorse: 20,
            sex: 'gelding',
            trainedFor: [
                {
                    trailRiding: '17 years',
                    naturalHorsemanship: '17 years',
                }
            ]},
            {
            nameOfHorse:'Basque',
            breedOfHorse:'Mustang',
            ageOfHorse: 8,
            sex: 'mare',
            trainedFor: [
                {
                    trailRiding: '6 years',
                    naturalHorsemanship: '7.5 years',
                    ranchRoping: '5 years',
                    dressage: '5 years', 
                }
            ]},
            {
            nameOfHorse:'Reina',
            breedOfHorse:'Foundation Bred Quarter Horse',
            ageOfHorse: 8,
            sex: 'mare',
            trainedFor: [
                {
                    trailRiding: '6 years',
                    naturalHorsemanship: '8 years',
                    ranchRoping: '3 years',
                    dressage: '5 years', 
                    reining: '3 years',
                    threeDayEventing: '2 years',  
                }
            ]},
            {
            nameOfHorse:'Kai',
            breedOfHorse:'Percheron Thoroughbred Cross',
            ageOfHorse: 18,
            sex: 'gelding',
            trainedFor: [
                {
                    trailRiding: '16 years',
                    naturalHorsemanship: '18 years', 
                    dressage: '1 year',  
                }
            ]}
        ]
        }

badAss.allBreedsOfHorses()