SCENARIOS = [
    {
        "prompt": "<h1>Conditional Probability</h1>\
          <p>You are facing a zombie and must try to strike it before it can fight back.</p> \
          <li>If you face the zombie with a <b>wand</b>, you are <b>80%</b> likely to defeat it with a single spell.</li>\
          <li>If you face it with a <b>sword</b>, you are <b>60%</b> likely to defeat it with a single blow.</li>\
          <p>You can choose to face the monster with one of two classes: the <b>mage</b> or the <b>knight</b>.</p>\
          <li>If the <b>mage</b> casts a spell with the <b>wand</b>, it is <b>70%</b> likely to succeed.</li>\
          <li>If a <b>knight</b> casts a spell with the <b>wand</b>, it is <b>30%</b> likely to succeed.</li>\
          <li>If the <b>knight</b> wields a <b>sword</b>, he is <b>80%</b> likely to strike his foe.</li>\
          <li>If a <b>mage</b> wields a <b>sword</b>, she is <b>40%</b> likely to strike her foe.</li>\
          <p>Which combination of character and weapon is most likely to defeat the zombie?</p>",
        "sprites": ["https://i.pinimg.com/originals/c9/3c/1a/c93c1a497abc17384fd5996ca7a671a5.gif"],
        "optional": false,
        "explanation": "<p>You need to use the product rule and conditional probability</p>\
         <li>P(M and W) = P(M|W) * P(W) = .7 * .8 = .56</li>\
         <li>P(M and S) = P(M|S) * P(S) = .4 * .6 = .24</li>\
         <li>P(K and W) = P(K|W) * P(W) = .3 * .8 = .24</li>\
         <li>P(K and S) = P(K|S) * P(S) = .8 * .6 = .48</li>\
         <p>P(M and W) has the highest probability of success!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your character!",
                "options": [
                    {
                        "sprite": "https://i.pinimg.com/originals/14/82/4e/14824e153f1f2ebd38801e4093d2bda3.gif",
                        "text": "Mage",
                        "inAnswer": true
                    },
                    {
                        "sprite": "https://cdna.artstation.com/p/assets/images/images/009/353/446/original/sven-thole-knight-run.gif?1518493621",
                        "text": "Knight",
                        "inAnswer": false
                    }
                ],
            },
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": true
                    }
                ],
            },
        ]
    },
    {
        "prompt": "<p>Now when you face the zombie, it will strike you first!</p>\
        <li>Because the <b>knight</b> has heavy armor, he has a <b>80%</b> chance of surviving an attack.</li>\
        <li>The <b>mage</b> has just a <b>60%</b> chance of surviving an attack.</li>\
        <p>Now what combination should you choose to maximize the probability of surviving the attack and then defeating the zombie with your first strike?</p>\
        <p>For reference:</p>\
        <li>If you face the zombie with a <b>wand</b>, you are <b>80%</b> likely to defeat it with a single spell.</li>\
        <li>If you face it with a <b>sword</b>, you are <b>60%</b> likely to defeat it with a single blow.</li>\
        <li>If the <b>mage</b> casts a spell with the <b>wand</b>, it is <b>70%</b> likely to succeed.</li>\
        <li>If a <b>knight</b> casts a spell with the <b>wand</b>, it is <b>30%</b> likely to succeed.</li>\
        <li>If the <b>knight</b> wields a <b>sword</b>, he is <b>80%</b> likely to strike his foe.</li>\
        <li>If a <b>mage</b> wields a <b>sword</b>, she is <b>40%</b> likely to strike her foe.</li>",
        "sprites": ["https://i.pinimg.com/originals/c9/3c/1a/c93c1a497abc17384fd5996ca7a671a5.gif"],
        "optional": false,
        "explanation": "<p>P(survive and strike) = P(survive) * P(strike|survive)</p>\
        <li>P(survive|M) = .6</li>\
        <li>P(survive|K) = .8</li>\
        <p>Multiplying the survive probabilities by the strike probabilities from the previous problem, P(K and S) now has the highest probability!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your character!",
                "options": [
                    {
                        "sprite": "https://i.pinimg.com/originals/14/82/4e/14824e153f1f2ebd38801e4093d2bda3.gif",
                        "text": "Mage",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://cdna.artstation.com/p/assets/images/images/009/353/446/original/sven-thole-knight-run.gif?1518493621",
                        "text": "Knight",
                        "inAnswer": true
                    }
                ],
            },
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": true
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": false
                    }
                ],
            },
        ]
    },
    {
        "prompt": "<h1>Discrete Probability Distributions</h1>\
        <p>Let's say that all we know is the probability distributions that define the weapon hit rates and damages.</p>\
        <li>The magic <b>wand</b>'s damage is a <b>discrete uniform</b> distribution over <b>[1, 12]</b></li>\
        <li>The <b>bow</b>'s hit chance is a <b>Bernoulli</b> distribution with <b>50%</b> chance to hit, and will do <b>10</b> damage when it hits and 0 otherwise.</li>\
        <li>The <b>sword</b> can hit multiple times per attack, with the number of hits given by a <b>Poisson</b> distribution with labmda=<b>2</b>. Each hit does <b>3</b> damage.</li>\
        <p>Which weapon has the highest expected damage for a single attack?</p>",
        "sprites": ["data:image/jpeg;base64,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"],
        "optional": false,
        "explanation": "<p>Use the expected value formulas for the distributions, and multiply with the damage per hit when necessary.</p>\
        <li>E[W] = (12+1)/2 = 6.5</li>\
        <li>E[B] = .5 * 10 = 5</li>\
        <li>E[S] = 2 * 3 = 6</li>\
        <p>The wand has the highest expected damage output!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": true
                    },
                    {
                        "sprite": "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c6906d8594d68e4.png",
                        "text": "Bow",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": false
                    },
                ],
            },
        ]
    },
    {
        "prompt": "<p>Now you're facing a Slime, which has <b>6</b> health, so you must do at least <b>6</b> damage to defeat it!</p>\
        <p>Which weapon has the greatest chance to kill the Slime with one attack?</p>\
        <p>For reference:</p>\
        <li>The magic <b>wand</b>'s damage is a <b>uniform</b> distribution over <b>[1, 12]</b></li>\
        <li>The <b>bow</b>'s hit chance is <b>Bernoulli</b> distribution with <b>50%</b> chance to hit, and will do <b>10</b> damage when it hits and 0 otherwise.</li>\
        <li>The <b>sword</b> can hit multiple times per attack, with a number given by a <b>Poisson</b> distribution with labmda=<b>2</b>. Each hit does <b>3</b> damage.</li>",
        "sprites": ["https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/74ac0c74bffd9d4.png"],
        "optional": false,
        "explanation": "<p>Find the weapon with the highest probability of doing 6 or more damage!</p>\
        <li>P(W >= 6) = 1 - P(W <= 5) = 1 - (P(W = 1) + ... + P(W = 5)) = 1 - 5/12 = 0.58</li>\
        <li>P(B >= 6) = P(S = 10) = .5</li>\
        <li>P(S >= 6) = 1 - P(S <= 5) = 1 - (P(S = 0) + P(S = 3)) = 1 - (e^-2 + 2 * e^-2) = 0.59</li>\
        <p>The sword has the highest probability of exceeding 6 damage!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c6906d8594d68e4.png",
                        "text": "Bow",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": true
                    },
                ],
            },
        ]
    },
    {
        "prompt": "<h1>Continuous Random Variables and Upper Bounds</h1>\
        <p>Let's analyze how likely weapons are to have a really <b>low</b> damage.</p>\
        <p>Assume you don't know the type of distribution, but know the mean and variance of each weapon's damage.</p>\
        <li>Wand: E = 5, V = 8.3</li>\
        <li>Bow: E = 5, V = 4</li>\
        <li>Sword: E = 6, V = 9</li>\
        <p>Using Chebyshev's bound, find the upper bound on the probability that the weapon's damage is <b>less than 2</b> \
        and select the weapon with the <b>tighest bound</b> (Note: All distributions are symmetric)</p>",
        "sprites": ["data:image/jpeg;base64,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"],
        "optional": false,
        "explanation": "<p>We have to get our desired probability to fit Chebyshev's formula:</p>\
        <p>P(damage < 2) = P(damage - E < 2 - E) = P(E - damage > E - 2)</p>\
        <p>By symmetry: ... = .5 * P(|damage - E| > E - 2)</p>\
        <p>Apply Chebyshev's bound: .5 * P(|damage - E| > E - 2) <= .5 * V / (E - 2)^2</p>\
        <li>Wand: .5 * 8.3/(5 - 2)^2 = .46</li>\
        <li>Bow: .5 * 4/(5 - 2)^2 = .22</li>\
        <li>Sword: .5 * 9/(6 - 2)^2 = .28</li>\
        <p>The bow has the lowest upper bound!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": false
                    },
                    {
                        "sprite": "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c6906d8594d68e4.png",
                        "text": "Bow",
                        "inAnswer": true
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": false
                    },
                ],
            },
        ]
    },
    {
        "prompt": "<p>A mage appears and reveals the true probability distributions!</p>\
        <li>Wand ~ Uniform over [0,10]</li>\
        <li>Bow ~ Normal(5, 4)</li>\
        <li>Sword ~ Normal(6, 9)</li>\
        <p>Now we can make a more informed decision - which weapon has the <b>lowest probability</b> of having <b>less than 2</b> damage?</p>",
        "sprites": ["https://i.pinimg.com/originals/14/82/4e/14824e153f1f2ebd38801e4093d2bda3.gif"],
        "optional": false,
        "explanation": "\
        <li>P(W < 2) = (2 - 0) / (10 - 0) = .2</li>\
        <li>P(B < 2) = P((B - 5) / 2 < (2 - 5) / 2) = Phi(-1.5) = 1 - Phi(1.5) = 1 - .93 = .07</li>\
        <li>P(S < 2) = P((S - 6) / 3 < (2 - 6) / 3) = Phi(-1.33) = 1 - Phi(1.33) = 1 - .91 = .09</li>\
        <p>The bow still has the lowest probability of having less than 2 damage!</p>",
        "optionGroups": [
            {
                "multipleSelectionsAllowed": false,
                "prompt": "Select your weapon!",
                "options": [
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38b4d5aa-47a8-4f4c-8637-ad0fd2318299/d9fa8n5-cdbe8fd1-ec39-4696-8bab-10861889277b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4YjRkNWFhLTQ3YTgtNGY0Yy04NjM3LWFkMGZkMjMxODI5OVwvZDlmYThuNS1jZGJlOGZkMS1lYzM5LTQ2OTYtOGJhYi0xMDg2MTg4OTI3N2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoAWpN__i9TrARvEq5m_L2kRx83XXimHie8ZnyIeC4",
                        "text": "Wand",
                        "inAnswer": false
                    },

                    {
                        "sprite": "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c6906d8594d68e4.png",
                        "text": "Bow",
                        "inAnswer": true
                    },
                    {
                        "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c95ec7b-5a4f-4aef-93df-78fad9ba2505/ddh4slr-82c38d93-e1a3-4414-9128-d8613670dc97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjOTVlYzdiLTVhNGYtNGFlZi05M2RmLTc4ZmFkOWJhMjUwNVwvZGRoNHNsci04MmMzOGQ5My1lMWEzLTQ0MTQtOTEyOC1kODYxMzY3MGRjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElJVJDFOgnKjHAN3UP_yjOqxk1s3lWSyPtIo7tseO30",
                        "text": "Sword",
                        "inAnswer": false
                    },
                ],
            },
        ]
    },
]

let currentScenarioIdx = -1;
let currentScenario = null;
let currentSelections = [];

function imageClicked(groupIdx, optionIdx) {
    currentSelections[parseInt(groupIdx)].forEach((_, idx, options) =>
        idx === parseInt(optionIdx) ? options[idx] = true : options[idx] = false
    );
    document.querySelectorAll('.option').forEach(el => {
        if (el.getAttribute('groupIdx') !== String(groupIdx)) {
            return;
        }

        if (el.getAttribute('optionIdx') === String(optionIdx)) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });

    const ready = currentSelections.reduce(
        (groupsFilled, options) =>
            groupsFilled && options.reduce(
                (optionsFilled, option) => optionsFilled || option,
            false),
        true);
    if (ready) {
        document.querySelector('#submit').style.display = 'block';
    }
}

function submitAttempt() {
    let correct = true;
    currentScenario.optionGroups.forEach((group, groupIdx) => {
        group.options.forEach((option, optionIdx) => {
            if (option.inAnswer != currentSelections[groupIdx][optionIdx]) {
                correct = false;
            }
        });
    });
    const noMoreScenarios = currentScenarioIdx == SCENARIOS.length - 1;
    document.querySelector('#scenario').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
    document.querySelector('#answer').textContent = correct ? 'Correct!' : 'Not quite!';
    document.querySelector('#explanation').innerHTML = currentScenario.explanation;
    document.querySelector('#next-scenario').style.display = noMoreScenarios ? 'none' : 'block';
    document.querySelector('#finish-prompt').textContent = noMoreScenarios ? "That's it! Thanks for playing!" : '';
    document.querySelector('#form-link').style.display = noMoreScenarios ? 'block' : 'none';
}

function renderNextScenario() {
    currentScenarioIdx++;
    currentScenario = SCENARIOS[currentScenarioIdx];
    currentSelections = currentScenario.optionGroups.map(group => Array(group.options.length).fill(false));

    const scenarioBody = `
        <div style='display: flex;'>
            <div class='problem-description'>
                <div>${currentScenario.prompt}</div>
                <img src='${currentScenario.sprites[0]}' width='200' height='200' />
            </div>
            <div>
                ${currentScenario.optionGroups.map((optionGroup, groupIdx) => `
                    <h3>${optionGroup.prompt}</h3>
                    <div style='display: flex;'>
                        ${optionGroup.options.map((option, optionIdx) => `
                            <div>
                                <img class='option' src='${option.sprite}' groupIdx='${groupIdx}' optionIdx='${optionIdx}' width='200' height='200' />
                                <p>${option.text}</p>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
                <button id='submit' style='display: none;'>GO!</button>
            </div>
        </div>
    `;
    document.querySelector('#scenario').innerHTML = scenarioBody;
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#scenario').style.display = 'block';
    document.querySelectorAll('.option').forEach(el => {
        el.onclick = ({ currentTarget }) => imageClicked(currentTarget.getAttribute('groupIdx'), currentTarget.getAttribute('optionIdx'));
    });
    document.querySelector('#submit').onclick = submitAttempt;
}

window.onload = () => {
    document.querySelector('#start').onclick = () => {
        document.querySelector('#title').style.display = 'none';
        renderNextScenario();
    };

    document.querySelector('#next-scenario').onclick = () => {
        renderNextScenario();
    };
};
