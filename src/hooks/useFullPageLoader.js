import React, { useState } from 'react'
import FullPageLoader from '../components/FullPageLoader';

const useFullPageLoader = () => {
    const [loading, setLoading] = useState(true);
    return [
        loading ? <FullPageLoader /> : null,
        () => setLoading(true), //shows loader
        () => setLoading(false) //hides loader
    ]
}

export default useFullPageLoader