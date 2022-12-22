const model = {
    currentPage: "login",

    create_account: {
        username: "",
        password: "",
        register: false
    },

    account: {
        username: "",
        password: ""
    },

    account_login: {
        username: false,
        password: false,
        login: false
    },

    account_info: {
        place_of_residence: "",
        from: "",
        university_college: "",
        workplace: ""
    },

    postsArr: []
}


// Classes
const publishedPost = document.getElementsByClassName("published-post")
const deleteIcon = document.getElementsByClassName("fa-solid fa-trash-can")

const profileComments = document.getElementsByClassName("profile-comments")
const comment = document.getElementsByClassName("comment")
const commentField = document.getElementsByClassName("comment-field")

const inputInfo = document.getElementsByClassName("input-info")
const outputInfo = document.getElementsByClassName("output-info")
const editIcon = document.getElementsByClassName("fa-solid fa-pen")
