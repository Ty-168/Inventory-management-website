import React from 'react'

export const FaqStructure = ({
  content
}: {
  content: {
    question: string;
    answer: string;
    content?: React.ReactNode | any;
  }[];
}) => {
    return(
        <div className='text-left w-full'>
          {content.map((item, index) => (
            <div key={item.question + index} className="my-10">
                <h1 className="text-xl font-bold text-black">
                    {item.question}
                </h1>
                <p className="text-kg mt-2 text-black">
                    {item.answer}
                </p>
                <div className="pt-2 border-b-2 border-black w-full"/>  
            </div>
            
          ))}

        </div>
    );
}