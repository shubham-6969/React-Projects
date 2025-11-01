function ProfileCard({ name, job, image, about }) {
    return (
        <>
            <div className="card text-center shadow-lg p-3 mb-4 bg-body rounded " style={{ width: "18rem" }}>
                <img
                    src={image}
                    className="card-img-top rounded-circle p-50%"
                    alt={image}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="text-muted">{job}</h6>
                    <p className="card-text">
                        {about}
                    </p>
                    <a href="#" className="btn btn-primary">
                        View Profile
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;
