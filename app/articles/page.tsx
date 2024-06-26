import React from 'react'
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import Pagination from '../components/Pagination';
import AddArticles from '../components/AddArticles';
import TabsContent from '../components/TabsContent';
import DeleteArticle from '../components/DeleteArticle';

const fetchData = async (page: number, perPage: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?search&page=${page}&page_size=${perPage}`, {cache: 'no-store'})
    return res.json()
}

const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString()
}

const Articles = async ({ searchParams }: {
    searchParams: {
        page: any;[key: number]: number | number[] | undefined
    }
}) => {
    let page = parseInt(searchParams.page)
    const perPage = 5
    const getData = await fetchData(page, perPage)
    const { articles } = getData.data

    const tabs = [
        {
            id: 1,
            title: 'Articles',
            content: (
                <div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Content
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article: any) => (
                                    <tr key={article.id} className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {article.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {article.content}
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.author.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(article.created_at)}
                                        </td>
                                        <td className="flex px-3 py-3">
                                            <DeleteArticle articleId={article.id}/>
                                            <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-2.5 ml-3 dark:focus:ring-yellow-900">
                                                <FaRegPenToSquare size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination setPage={page} />
                </div>
            )
        },
        {
            id: 2,
            title: 'Add/Edit Article',
            content: (
                <div>
                    <AddArticles />
                </div>
            )
        }
    ]

    return (
        <div>
            <div className="sm:p-4 p-1">
                <div className="sm:w-full w-80 col-span-1 m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <div className='flex justify-between items-center mb-2'>
                        <h2 className='font-bold ml-2'>Articles List</h2>

                    </div>
                    <TabsContent tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Articles