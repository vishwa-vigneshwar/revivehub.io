export default function SectionTitle({

title,

subtitle

}){

return(

<>

<p

style={{

color:"#22C55E",

fontWeight:"700",

marginBottom:"10px"

}}

>

{subtitle}

</p>

<h2

style={{

fontSize:"48px",

marginBottom:"50px"

}}

>

{title}

</h2>

</>

)

}