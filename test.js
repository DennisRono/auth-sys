import React from 'react'

const test = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input onChange​={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
      <label htmlFor="body">Body</label>
      <textarea onChange​={(e) => setFormData({...formData, body: e.target.value})}  value={formData.body} name="body" id="body"></textarea>
    </div>
  )
}

export default test