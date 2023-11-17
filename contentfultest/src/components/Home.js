import React, {useEffect, useState} from "react";

export default function Home(props) {

const blog_entries = props.entries.map((entry)=>{
console.log(entry)

    return(
        <div key={entry.sys.id} className="w-full rounded overflow-hidden shadow-lg .col-auto mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0">
            <div className="">
           <img className="w-full bg-cover" src={`https:${entry.fields.blogPhoto.fields.file.url}?fit=fill&w=400&h=400`} alt={entry.fields.blogPhoto.fields.file.description}/>
           </div>
           <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{entry.fields.title}</p>
              <p className="text-gray-700 text-base">{entry.fields.summary}</p>
            </div>
        </div>

    )

})
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">{blog_entries}</div>
)
}