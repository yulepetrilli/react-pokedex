import React from 'react';

export default function Pagination({pokmeonPerPage, total, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total / pokmeonPerPage); i++){
        pageNumbers.push(i)
    };

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-5">
                {pageNumbers.map(page => 
                    <li className="page-item">
                        <a onClick={() => paginate(page)} className="page-link" href="#">{page}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};