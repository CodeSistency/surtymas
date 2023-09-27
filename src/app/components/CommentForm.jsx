'use client'
import React, {useState, useEffect} from 'react'
import axios from '../../../api/axios'


function CommentForm({user, id}) {

    const [text, setText] = useState('')
    const [comentario, setComentario] = useState('')
    const [comentarios, setComentarios] = useState()

    

    const handleTextChange = (event) => {
        setText(event.target.value);
      };

    const handleSubmit = async (e) => {

        e.preventDefault()
    
        let isMounted = true;
        const controller = new AbortController();

        try {
            // setError(false)
            // setIsLoadingCreate(true)
            const response = await axios.put(`productos/comentario`, {comentario: text, username: user, id},
            
        
        {
                signal: controller.signal
            });
            console.log(JSON.stringify(response?.data));
            isMounted && setComentario(response.data);
            // console.log(urls)
            // navigate("/admin", { state: {from: location}, replace: true });
            // navigate("/admin", { state: {from: location}, replace: true });
            // navigate(-1);
        } catch (err) {
            console.error(err);
            // setErrMsg(err)
            // setError(true)
            // navigate('/login', { state: { from: location }, replace: true });
            
        }
    
        return () => {
            isMounted = false;
            controller.abort();
        }
    }

  return (
    <form class="mb-6" onSubmit={handleSubmit}>
    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label for="comment" class="sr-only">Tu comentario</label>
        <textarea id="comment" rows="6"
            onChange={handleTextChange}
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Comenta sobre el producto..." required></textarea>
    </div>
    <button type="submit"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
        Enviar comentario
    </button>
</form>
  )
}

export default CommentForm