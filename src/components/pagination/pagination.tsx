export function Pagination({
    page,
    totPage,
    setPage,
}: {
    page: number;
    totPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
    const updatePage = (update: string) => {
        if (update === 'previous' && page > 1) setPage(page - 1);
        if (update === 'next' && page < totPage) setPage(page + 1);
    };

    return (
        <div className="pagination">
            <button
                className={`pagination__changePage ${
                    page <= 1 ? 'pagination__changePage--disabled' : ''
                }`}
                onClick={() => updatePage('previous')}
            >
                {'<'}
            </button>
            <p className="pagination__numbers">{`${page} / ${totPage}`}</p>
            <button
                className={`pagination__changePage ${
                    page === totPage ? 'pagination__changePage--disabled' : ''
                }`}
                onClick={() => updatePage('next')}
            >
                {'>'}
            </button>
        </div>
    );
}
