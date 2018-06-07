export interface UserProfile {
    userid: number;
    firstName: string;
    lastName: string;
    middleName: string;
    dob: string;
    original_picture: string; // for edit thumbnail purpose
    cropped_picture: string; // for preview purpose
}
