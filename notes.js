const fs= require('fs')
const chalk= require('chalk')

const getNotes =  ()=> {
    return 'Your notes...'
}

const addNote= (title,body)=>{
    const notes= loadNotes()
    // const duplicateTitles=notes.filter((note)=>  note.title===title)
    const duplicateNote=notes.find((node)=>notes.title===title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse(title+" note added!"))
    }
    else{
        console.log(chalk.red.inverse("Title already exists!"))
    }
}

const removeNote= (title)=>{
    const notes= loadNotes()
    const notesToKeep= notes.filter((note)=> note.title!==title )
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse(title+" removed"))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse("No note found"))
    }
}

const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes=()=>{

    try{
        const notesBuffer=fs.readFileSync('notes.json')
        const notesString=notesBuffer.toString()
        return JSON.parse(notesString)
    }catch(e)
    {
        return []
    }   
}

const listNotes=()=>{
    console.log(chalk.bgMagenta('Your Notes...'))
    const notes= loadNotes()
    notes.forEach((note)=>{
        console.log(note.title , note.body)
    })
}

const readNotes=(title)=>{
    const notes=loadNotes()
    const note= notes.find((note)=> note.title===title)


    if (note){
        console.log(chalk.blue(note.title, note.body))
    }
    else{
        console.log('no note found')
    }
}
module.exports= {
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}