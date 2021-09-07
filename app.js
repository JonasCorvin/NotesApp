const chalk = require('chalk')
const { describe, argv } = require('yargs')
const yargs = require('yargs')
const log= console.log
const notes=require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()


// const command= process.argv[2]
// if(command==='add'){
//     log('Adding Note...')
// }
// else if(command==='remove'){
//     log('Removing Note...')
// }

// console.log(chalk.green('Success!'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.bgRed('Helo'))
// log(chalk.bgBlue.bold('Yoooooo'))

// const notes = require('./notes.js')
// const note= notes()
// console.log(note)

// const add= require('./util.js')
// const sum=add(4,4)
// console.log(sum)