import { Component, OnInit } from '@angular/core';

import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private _teamService: TeamService
  ) { }

  isLoaded = false;
  image = "";
  title = "";

  team = [
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/1.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/3.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/2.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/4.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/3.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/5.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/3.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/1.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/2.png"
    // },
    // {
    //   name: "Testy McTesterton",
    //   credential: "Master Baiter",
    //   pets: "I have 2 siamese porcupine turtles",
    //   hobbies: "I fish, but I love baiting the most. Hence my credential. I'm surprisingly a fun person, I swear!",
    //   fun_fact: "I killed a bear once. With my elbow.",
    //   bio: "This is the place that I usually fill with fake text, but as of now for some reason I feel like wasting time and writing an actual bio about my favorite hat. I bought it in Virginia city, Nevada, with two of my best friends. We all have dope hats, and call ourselves the Pinecrest gang. It's a thing. We look excellent in our hats. This hat has travelled the world, and has shot many weapons. It's a certified badass, this hat of mine. Ok, that should be eneough. Cheers!",
    //   email: "yourface@mybutt.org",
    //   phone: "310-867-5309",
    //   img: "/assets/images/team/3.png"
    // },
  ]

  getTeamData() {
    this._teamService.getAllData()
      .subscribe((result: any) => {
        let data = result.data.data.team_page.data[0];
        this.title = data.title;
        this.image = data.header_image.full_url;
        data.team_members.forEach((i) => {
          this.team.push({
            bio: i.bio,
            credential: i.credential,
            email: i.email,
            fun_fact: i.fun_fact,
            hobbies: i.hobbies,
            img: i.image.full_url,
            name: i.name,
            pets: i.pets,
            phone: i.phone
          })
        })
        this.isLoaded = true;
      })
  }

  ngOnInit(): void {
    this.getTeamData();
  }
}
