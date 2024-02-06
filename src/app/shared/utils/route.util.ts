export const getPageName = (url: string, from: string = 'pages') => {
    const params: string[] = getUrlParams(url);
    const pageIndex = params.indexOf(from);

    if (pageIndex == -1) throw new Error('Not found')
    return params[pageIndex + 1];
}

export const getUrlParams = (url: string) => url.split('/');