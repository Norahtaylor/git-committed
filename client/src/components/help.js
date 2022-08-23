{
    user.id === match.requestor.id ?

        <>
            <ImageListItem
                id={match.id}
            >
                <img
                    src={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format`}
                    srcSet={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={match.receiver.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={`${match.receiver.first_name}, ${match.receiver.age}`}
                    subtitle={match.receiver.bio}



                    actionIcon={
                        <>
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                onClick={() => handleInfoClick(match)}
                            // aria-label={`info about ${match.first_name}`}
                            >
                                <InfoIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label="delete">
                                {/* <DeleteIcon id={match.id} onClick={() => handleDelete(match)} /> */}
                            </IconButton>



                        </>

                    }

                />
            </ImageListItem>


        </>

        :

        <ImageListItem

        >
            <img
                src={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format`}
                srcSet={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={match.requestor.name}
                loading="lazy"
            />
            <ImageListItemBar
                title={`${match.requestor.first_name}, ${match.requestor.age}`}
                subtitle={match.requestor.bio}
                actionIcon={
                    <>
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            onClick={() => handleInfoClick(match)}
                        >
                            <InfoIcon />
                        </IconButton>
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label="delete">
                            {/* <DeleteIcon id={match.id} onClick={() => handleDelete(match)} /> */}
                        </IconButton>

                    </>

                }
            />

        </ImageListItem>
}