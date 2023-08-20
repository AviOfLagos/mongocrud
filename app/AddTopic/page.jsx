'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description)
            alert("Title and description are required.");
            return;
        }
        
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {"Content-type": "application/json", },
                body:JSON.stringify({title, description}),
            });
            
            if (res) {
                router.push("/");
            } else {
                throw new Error("Failed to create topic");
            }
        } catch (error) {}
            
    }
    return(
        <form action="Post" className="flex flex-col gap-4">
            <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text" className="border border-slate-500 px-6 py-2 " placeholder="Topic Title"/>
            <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text" className="border border-slate-500 px-6 py-2 " placeholder="Topic Description"/>
            <button className="bg-green-500 text-white w-fit font-bold py-2 px-8">Add Topic</button>

        </form>
    )
    }