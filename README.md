# minesweeper-API
API test

We ask that you complete the following challenge to evaluate your development skills. Please use the programming language and framework discussed during your interview to accomplish the following task.

## The Game
Develop the classic game of [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))

## Show your work

1.  Create a Public repository ( please dont make a pull request, clone the private repository and create a new plublic one on your profile)
2.  Commit each step of your process so we can follow your thought process.

## What to build
The following is a list of items (prioritized from most important to least important) we wish to see:
* Design and implement  a documented RESTful API for the game (think of a mobile app for your API)
* Implement an API client library for the API designed above. Ideally, in a different language, of your preference, to the one used for the API
* When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)
* Ability to 'flag' a cell with a question mark or red flag
* Detect when game is over
* Persistence
* Time tracking
* Ability to start a new game and preserve/resume the old ones
* Ability to select the game parameters: number of rows, columns, and mines
* Ability to support multiple users/accounts
 
## Deliverables we expect:
* URL where the game can be accessed and played (use any platform of your preference: heroku.com, aws.amazon.com, etc)
* Code in a public Github repo
* README file with the decisions taken and important notes

## Time Spent
You do not need to fully complete the challenge. We suggest not to spend more than 5 hours total, which can be done over the course of 2 days.  Please make commits as often as possible so we can see the time you spent and please do not make one commit.  We will evaluate the code and time spent.
 
What we want to see is how well you handle yourself given the time you spend on the problem, how you think, and how you prioritize when time is insufficient to solve everything.

Please email your solution as soon as you have completed the challenge or the time is up.



## Rodrigo's notes


Live version [here](http://deviget.rodrigobutta.com)

### Plan Part 1

- I'm going to build a plain laravel app
- Install Passport library to have some registration and login for handle players (yes, it's the less priority step but i think it will be better to doit first). It will deliver some nice bootstraped vuj.js login, reigstration and recovery, and handle a base session.
- Build a GAMES table (with migrations) to store game history (status, user/player id, game config, etc)
- Make some services (routes/controllers) to handle the game status stored in GAMES table. If at this point i'm ok with time, i'll put some Repository interface to decouple Infrastructure a bit, but i'm not sure now.

### Plan Part 2

- Make a blank React app and put it inside a blade. Do some tests to pass laravel session params thru JS to have the user ID inside at least. I would do an standalone app to build a layered pattern site, but i wont be able to achieve nothing in time, so i'll try to build it this way. (i'm choosing React beacuse i'm more fresh with it right now and i also have some game basic logic already built that i could use.. in wich case, i'll let you know wich parts i've reused in the comments)




### Real world

Migrated Vuejs to Reactjs auth and Laravel scaffold to be in harmony with the react board


### Build

1) Clone Repo.
2) Create database.
3) Put database credentials and the final domain in the .env file
4) Generate new project key with `php artisan key:generate`
5) Generate database structure with migration `php artisan migrate`
6) Populate levels table (coulnd't do an admin for that) with `php artisan db:seed`
7) Compile SCSS, JS, React and keep wagching changes `npm run dev`
8) Point the root of the server to de /public folder
