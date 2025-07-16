import NewsCard from './NewsCard';
import NewsCardWithListen from './NewsCardWithListen';

export default function HorizontalMixedCard() {
    return (
        <div className="container py-5">
            <div className="d-flex gap-3 overflow-auto">
                <NewsCardWithListen />
                <div
                    style={{
                        width: '1px',
                        backgroundColor: '#ccc',
                        height: 'auto',
                    }}
                ></div>
                <NewsCard />
                <div
                    style={{
                        width: '1px',
                        backgroundColor: '#ccc',
                        height: 'auto',
                    }}
                ></div>
                <NewsCardWithListen />
                <div
                    style={{
                        width: '1px',
                        backgroundColor: '#ccc',
                        height: 'auto',
                    }}
                ></div>
                <NewsCardWithListen />
            </div>
        </div>
    );
}
