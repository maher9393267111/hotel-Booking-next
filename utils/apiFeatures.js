class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        // http://localhost:3000/api/rooms?location=Stafford
        console.log('searhQuery', this.queryStr.location);
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: 'i'
            }
        } : {}

        //  Rooms.query
        this.query = this.query.find({ ...location })  
      //  console.log('searhQueryRESULT', this.query);
        return this; //  this mean this.query Result
    }


    filter() {

        const queryCopy = { ...this.queryStr }

        // Remove fields from query
        // delete bezacuse is  beacuse of the queryStr.page execute in pagination
        // and we don't want to filter by page a
        // delete location because itis executed in the search
        const removeFields = ['location', 'page'] 
        removeFields.forEach(el => delete queryCopy[el]);


        // Advance filtering with gt, gte etc
        let filterQuery = {};
        const fieldsLength = Object.keys(queryCopy).length;

        for (let i = 0; i < fieldsLength; i++) {

            let queryStr = JSON.stringify(Object.keys(queryCopy)[i])
            const filterField = queryStr.substring(1, queryStr.indexOf('['))

            if (filterField.length > 1) {
                const fieldValue = Object.values(queryCopy)[0]

                const filterOperator = queryStr.substring(queryStr.indexOf('[') + 1, queryStr.indexOf(']'))

                filterQuery = { ...filterQuery, [filterField]: { [`$${filterOperator}`]: fieldValue } }

            } else {
                filterQuery = { ...filterQuery, [Object.keys(queryCopy)[i]]: Object.values(queryCopy)[i] }
            }

        }

        this.query = this.query.find(filterQuery);
        return this;
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }

}

export default APIFeatures;