import React, { Fragment } from 'react'
import { ArticleData } from '../store/data';



const Article = () => {
    return (
        <Fragment>
            <div className='md:p-24 p-5'>
                <div className='md:flex justify-between py-10'>
                    <h1 className='uppercase text-4xl text-center block'>Our creations</h1>
                    <p className='hidden md:inline-block uppercase border border-black px-8 py-2 hover:cursor-pointer hover:bg-black hover:text-white'> See all</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 place-content-between gap-7 gap-y-7 container'>
                    {ArticleData.map((data) => {
                        return (
                            <div className='text-white relative cursor-pointer  hover:text-black '>
                                <div className="hover:opacity-20 ">
                                    <img src={data.wImg} alt="" className='hidden md:block' />
                                    <img src={data.mImg} alt="" className='md:hidden' />
                                </div>
                                <span className='uppercase absolute bottom-16 left-9 text-2xl'> {data.title} </span>
                            </div>
                        )
                    })}
                    <p className=' md:hidden uppercase border border-black px-8 py-4 mx-auto hover:cursor-pointer hover:bg-black hover:text-white'> See all</p>

                </div>
            </div>

        </Fragment>
    )
}

export default Article