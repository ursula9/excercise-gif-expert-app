import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        //console.log( newCategory );
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ])
        //setCategories( cat  => [...cat, 'valorant']);
    };

    return(
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ event  => onAddCategory(event)}
            />
            {/* Listado de Gif */}
            
                { 
                    categories.map( ( category ) => 
                        
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                            // <div key={ category }>
                            //     <h3>{ category }</h3>
                            //     <li>{ category }</li>
                            // </div>
                        
                    )
                }
                {/* <li>ABC</li> */}
            
                {/* Gif Item */}
        </>
    );

};