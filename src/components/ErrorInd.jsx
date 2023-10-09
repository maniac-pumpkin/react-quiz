import Button from './Button';

const refresh = () => {
	window.location.reload();
};

function ErrorInd() {
	return (
		<div className="text-center">
			<section className="px-2 py-1 font-medium text-whiteColor bg-deepBlue rounded-full flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					viewBox="0 0 24 24"
					style={{ fill: '#d80032' }}
				>
					<path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
				</svg>
				<p className="text-3">An Error Occurred!</p>
			</section>
			<Button className="mt-3" onClick={refresh}>
				Retry
			</Button>
		</div>
	);
}

export default ErrorInd;
