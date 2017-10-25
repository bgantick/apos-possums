module.exports = {
   name: 'possum',
   label: 'Possum',
   pluralLabel: 'Possums',
   addFields: [
     {
       name: 'title',
       label: 'Possum Name',
       type: 'string'
     },
     {
       name: 'weight',
       label: 'Weight',
       type: 'integer'
     },
     {
       name: 'bio',
       label: 'Bio',
       type: 'string',
       textarea: true
     },
     {
       name: 'avatar',
       label: 'Avatar',
       type: 'singleton',
       widgetType: 'apostrophe-images',
       options: {
         limit: 1,
         aspectRatio: [1, 1],
         minSize: [300, 300]
       }
     }
   ],
   restApi: true
};
