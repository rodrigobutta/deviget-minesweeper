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
